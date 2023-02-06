
import './newRoom.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { roomInputs } from '../../formSource';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const NewRoom = () => {
    const [info, setInfo] = useState({});
    const [hotelId, setHotelId] = useState(undefined);
    const [rooms, setRooms] = useState([]);

    const { data, loading, error } = useFetch('/hotels');

    const handleChange = (ev) => {
        setInfo((prev) => ({ ...prev, [ev.target.id]: ev.target.value }));
    };

    const handleClick = async (ev) => {
        ev.preventDefault();
        const roomNumbers = room.split(',').map((room) => ({number: room}));
        try {
            await axios.post(`/rooms/${hotelId}`, {...info, roomNumbers});
        }
        catch (err) {
            console.log(err);
        }
    };

    console.log(info);

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add New Room</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            {roomInputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input id={input.id}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    onChange={handleChange} />
                                </div>
                            ))}
                            <div className="formInput">
                                <label>Rooms</label>
                                <textarea onChange={(ev) => setRooms(ev.target.value)}
                                placeholder="note: please give comma between room numbers" />
                            </div>
                            <div className="formInput">
                                <label>Choose a hotel</label>
                                <select id="hotelId" onChange={(ev) => setHotelId(ev.target.value)}>

                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewRoom;

