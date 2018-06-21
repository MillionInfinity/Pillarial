import React, {Component} from 'react';
import TeacherData from './TeacherData';
import { GetFromFB } from './UserIntr/auth';






class TeacherInteraction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teaFb: [],
            }

    }
    componentDidMount = () => {
        GetFromFB('teacher').then(data => {
         let teacherstuff = Object.values(data);
            // console.log("TeacherInteraction line 21", teacherstuff);
            this.setState({
                teaFb: teacherstuff
            })

        });

    }
      render() {
          let view = <TeacherData data={this.state.teaFb}/>
        return (
            <div className="TeacherInteraction">
          
               <div >{view}</div>
            </div>
        );
    }
}


export default TeacherInteraction;
