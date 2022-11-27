import { useRef } from "react";


export default function RegularForm() {
    const name = useRef();
    const email = useRef();
    const subject = useRef();
    const message = useRef();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(name.current.value, email.current.value, subject.current.value, message.current.value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <input type="text" name="name" placeholder="Ім'я" size="40" ref={name}/>
            </div>
            <div>
                <input type="email" name="email" required placeholder="E-mail" size="40" ref={email} pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"/>
            </div>
            <div>
                <input type="text" name="subject" required placeholder="Тема" size="40" ref={subject}/>
            </div>
            <div>
                <textarea name="message" placeholder="Повідомлення" cols="40" rows="10" ref={message}/>
            </div>
            <div>
                <input type="submit" value="Відправити" />
            </div>
        </form>
    );
}