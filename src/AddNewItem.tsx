import React, { useState} from "react";
import { AddItemButton } from "./styles";
import { NewItemForm } from "./NewItemForm";

/**
 * Props for AddNewItem
 */
interface AddNewItemProps {
    onAdd(text: string): void //onAdd is callback function that will be called when we click Create item btn
    toggleButtonText: string //is the text we'll render when this component is a btn
    dark?: boolean //is a flag we'll pass to the styled component
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const {onAdd, toggleButtonText, dark} = props;

    if(showForm) {
        //we show item creation here
        return (
            <NewItemForm onAdd={text => {
                onAdd(text)
                setShowForm(false)
            }}
            />
        )
    }

    return <button onClick={() => setShowForm(true)}>{toggleButtonText}</button>

    // return (
    //     <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
    //         {toggleButtonText}
    //     </AddItemButton>
    // )
}



