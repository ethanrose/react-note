import React from 'react';




class Note extends React.Component {

    render() {
        //styles
        const noteBox = {
            width: "300px",
            height: "100px",
            backgroundColor: "white",
            color: "black",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            borderRadius: "5px",
            position: "fixed",
            bottom: "5px",
            left: "5px",
            padding: "10px 15px"
        }
        const noteTitle = {
            fontFamily: "arial",
            fontWeight: "bold",
            fontSize: "16px"
        }
        const noteX = {
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer"
        }


        return (
            <div style={noteBox}>
                <div style={noteTitle}>Note #{this.props.noteID}</div>
                <div style={noteX} onClick={()=>this.props.handleDismiss()}>&#10006;</div>
                I am a note description.
            </div>
        )
    }
};

export default Note;