// axios import - lowercase
import axios from 'axios';

// export axios
export default {
    find: function() {
        return axios.get('https://randomuser.me/api/?results=20&nat=us');
    }
}