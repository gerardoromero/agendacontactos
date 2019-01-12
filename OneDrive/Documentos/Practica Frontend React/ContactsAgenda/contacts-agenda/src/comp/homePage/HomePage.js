import React from 'react';
import ContactListPage from '../contactListPage/ContactListPage';

class HomePage extends React.Component{
    render(){
        return(
            <div>
                HomePage
                <ContactListPage />
            </div>
        )
    }
}

export default HomePage;