import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import PropTypes from 'prop-types';

    function getModalStyle() {
        const top = 50 ;
        const left = 50;
    
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const useStyles = makeStyles(theme => ({

        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            position: 'absolute',
            width: 400 ,
            height: 600,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));


    const Recipe = ({recipefull}) => {

        //Set modal

        const [modalStyle] = useState(getModalStyle);
        const [open, setOpen] = useState(false);

        const classes= useStyles();

        const handleOpen = () => {
            setOpen(true);
        
        }
        const handleClose = () => {
            setOpen(false);
        }

        //Extract context values

        const {saveIdRecipe, Inforecipe, SaveRecipe} = useContext(ModalContext);
        
        //Show and format the ingredients

        const showIngredients = Inforecipe => {

            let Ingredients = [];
            for(let i = 1; i < 16; i++){
                if(Inforecipe[`strIngredient${i}`]){
                    Ingredients.push(
                    <li>
                        {Inforecipe[`strIngredient${i}`]} 
                        {Inforecipe[`strMeasure${i}`]}
                    </li>
                    )
                }
            }
        return Ingredients;
        }


        return ( 
            <div className="col-md-4 col-sm-6 mb-4">
                <div className="card p-3">
                    <h2 className="card-header">{recipefull.strDrink}</h2>
                    <img className="card-img-top img-fluid" src ={recipefull.strDrinkThumb} alt={`Img ${recipefull.strDrink}`} />

                    <div className="card-body">
                        <button
                            type="button"
                            className="btn btn-block btn-primary"
                            onClick={() => {
                                saveIdRecipe(recipefull.idDrink);
                                handleOpen();
                            }}
                        >See Recipe </button>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            key ={saveIdRecipe}
                            onClose={() => {
                                saveIdRecipe(null);
                                SaveRecipe({});
                                handleClose();
                            }}
                            
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500
                            }}
                        >
                            <div style={modalStyle} className={`Modals ${classes.paper}`} >
                                <h3>{Inforecipe.strDrink}</h3>
                                <h3>Ingredients & quantities</h3>
                                <ul>
                                    {showIngredients(Inforecipe)}
                                </ul>
                                <img className="img-fluid my-2" src={Inforecipe.strDrinkThumb} alt={`Img ${recipefull.strDrink}`}/>
                                <h3 className="">Instructions</h3>
                                <p>{Inforecipe.strInstructions}</p>
                        
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }

Recipe.propTypes = {
    recipefull:PropTypes.object.isRequired
}
export default Recipe;