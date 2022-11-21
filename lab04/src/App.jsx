import {Container, Typography} from "@mui/material";
import './App.css';
import MUIForm from "./components/MUIForm";
import ValidatingForm from "./components/yup-form/ValidatingForm";


function App() {
    const cities = [
        {id: 1, name: "Київ"},
        {id: 2, name: "Львів"},
        {id: 3, name: "Харків"},
        {id: 4, name: "Одеса"},
        {id: 5, name: "Дніпро"},
        {id: 6, name: "Запоріжжя"},
        {id: 7, name: "Донецьк"},
    ]

    const palettes = [
        {id:0, value: 816, label: "Палета від 1,5 м2 до 2 м2 (816)"},
        {id:1, value: 612, label: "Палета від 1 м2 до 1,49 м2 (612)"},
        {id:2, value: 408, label: "Палета від 0,5 м2 до 0,99 м2 (408)"},
        {id:3, value: 204, label: "Палета від 0,25 м2 до 0,49 м2 (204)"},
    ]

    const packages = [
        {id: 0, label: "Конверт з ПБ плівкою С/13 (150х215) мм"},
        {id: 1, label: "Конверт з ПБ плівкою D/14 (180х265) мм"},
        {id: 2, label: "Конверт з ПБ плівкою Е/15 (220х265) мм"},
        {id: 3, label: "Коробка (0.5 кг) пласка"},
        {id: 4, label: "Коробка (0.5 кг) стандартна"},
        {id: 5, label: "Коробка (0.5 кг) з наповнювачем"},
        {id: 6, label: "Коробка (10 кг) стандартна"},
    ]

    const returnTypes = [
        {id: 0, label: "Документи"},
        {id: 1, label: "Грошовий переказ"},
    ]

    return (
        <Container>
            <Typography variant="h1" textAlign={"center"}>Forms</Typography>

            <MUIForm/>
            <ValidatingForm cities={cities} palettes={palettes} packages={packages} returnTypes={returnTypes} />
        </Container>
  );
}

export default App;
