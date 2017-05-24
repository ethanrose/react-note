import React from 'react';
import Note from './component/note';


class ReactNote extends React.Component {
    constructor(){
        super();
        this.state = {
            notes: [0],
            count: 1
        }
    }
    handleDismiss(id) {
        let newNotes = this.state.notes
        newNotes.splice(newNotes.indexOf(id), 1)
        this.setState({notes: newNotes})
    }
    notify() {
        let newNotes = this.state.notes
        newNotes.push(this.state.count)
        this.setState({notes: newNotes, count: this.state.count + 1})
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div>{this.state.count}
            <button onClick={ ()=>this.notify() }>Generate new note</button>
            {this.state.notes.map( (id)=>{
                return <Note noteID={id} handleDismiss={()=>this.handleDismiss(id)} />
            })}
            </div>
        )
    }
};

export default ReactNote;