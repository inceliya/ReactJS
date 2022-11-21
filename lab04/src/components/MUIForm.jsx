import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";


export default function MUIForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, topic, message);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }
    const handleReset = () => {
        setName("");
        setEmail("");
        setTopic("");
        setMessage("");
    }

    const isEmailValid = () => {
        const regex = /^\w+@\w+\.\w+$/;
        return regex.test(email) || email === "";
    }
    const isTopicValid = () => {
        return topic.length > 5 || topic === "";
    }

    return (
        <Box>
            <Typography variant="h4" align={'center'}>Vanilla (MUI) Form</Typography>
            <form onSubmit={handleFormSubmit}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <TextField label={"Ваше ім'я"} placeholder={"Степан Бандера"} type={"text"}
                               value={name} onChange={handleNameChange} sx={{marginY: 1, width: 400}}/>
                    <TextField label={"Ваш email"} placeholder={"qwerty@gmail.com"} type={"email"} required
                               error={!isEmailValid()} helperText={!isEmailValid() ? "Некоректний email" : ""}
                               value={email} onChange={handleEmailChange} sx={{marginY: 1, width: 400}}/>
                    <TextField label={"Тема повідомлення"} placeholder={"Пропозиція покращення сервісу"}
                               required error={!isTopicValid()}
                               helperText={!isTopicValid() ? "Повідомлення має бути довшим за 5 символів" : ""}
                               type={"text"} value={topic} onChange={handleTopicChange} sx={{marginY: 1, width: 400}}/>
                    <TextField label={"Ваше повідомлення"} type={"textarea"} multiline minRows={4} maxRows={6}
                                 value={message} onChange={handleMessageChange} sx={{marginY: 1, width: 400}}/>

                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 400}}>
                        <Button variant="contained" type={"submit"} sx={{marginY: 1}}>Відправити</Button>
                        <Button variant="contained" type={"reset"} onClick={handleReset} sx={{marginY: 1}}>Очистити</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}