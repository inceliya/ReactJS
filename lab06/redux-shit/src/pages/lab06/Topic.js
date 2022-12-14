import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../store/slices/topic";

const Topic = () => {
    const dispatch = useDispatch();
    const topic = useSelector(state => state.topic.value);
    const topicRef = useRef();

    const handleChangeTopic = () => dispatch(setValue(topicRef.current.value));

    return (
        <>
            <p>
                Lesson: {topic}
            </p>
            <input ref={topicRef} />
            <button onClick={handleChangeTopic}>Change topic</button>
        </>
    );
}

export default Topic;