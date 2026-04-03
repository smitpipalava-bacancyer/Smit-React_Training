import { useEffect, useState } from "react"
import { useDebounce } from "../CustomHook/useDebounce";
import { useFetch } from "../CustomHook/useFetch";
import { useForm } from "../CustomHook/useForm";
import { useValidate } from "../CustomHook/useValidate";
import { RenderData } from "./RenderData";
import "../CSS/HomePage.css"
import fields from "./FromData.json"


export function HomePage() {
    const [UserData , setUserData] = useState([]);
    const initialValues = {
        firstName: "",
        maidenName: "",
        lastName: "",
        age: ""
    }

    const [inputValue, setInputValue] = useState("");
    const [currentPage, setcurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState();
    const [order, setOrder] = useState();


    const [URL, setURL] = useState("https://dummyjson.com/users?limit=10&skip=0");


    const finalValue = useDebounce(inputValue);
    const { values, handleChange } = useForm(initialValues);

    // console.log("values",values);


    useEffect(() => {
        let newUrl = "";
        const skipValue = (currentPage - 1) * 10;

        if (finalValue) {
            newUrl = `https://dummyjson.com/users/search?q=${finalValue}&limit=10&skip=${skipValue}`;

            if (sortBy && order) {
                newUrl += `&sortBy=${sortBy}&order=${order}`;
            }

            console.log("so new url is:", newUrl)


        } else {
            newUrl = `https://dummyjson.com/users?limit=10&skip=${skipValue}`;

            if (sortBy && order) {
                newUrl += `&sortBy=${sortBy}&order=${order}`;
            }
        }

        setURL(newUrl);
    }, [finalValue, currentPage, sortBy, order]);

    const FetchedUserData = useFetch(URL);

    useEffect(()=>{
        if(FetchedUserData?.users){
            setUserData(FetchedUserData.users);
        }
    },[FetchedUserData]);

    const handleDelete = (id)=>{
        setUserData(prev => prev.filter(user=> user.id !== id))
    }

    const { errors, handleValidation, handleSubmit } = useValidate(initialValues, fields);

    const handleAddUser = (newUser)=>{
        handleSubmit(newUser);

        // if(errors.length !== 0) {
        //     return;
        // };

        console.log(UserData);

        setUserData(prev => [...prev , {...newUser}]);

        console.log(UserData);
    }

    const totalPage = Math.ceil(FetchedUserData.total / 10);

    const handleNextPage = () => {
        setcurrentPage(prev => Math.min(totalPage, prev + 1));
    }

    const handlePrevPage = () => {
        setcurrentPage(prev => Math.max(1, prev - 1));
    }

    const handleSortChange = (e) => {
        if (!e.target.value) return;
        setSortBy(e.target.value);
    }

    const handleOrderChange = (e) => {
        if (!e.target.value) return;
        setOrder(e.target.value);
    }


    return (
        <>
            {/* Navbar */}
            <nav>
                <h1>Session 6</h1>
                <div className="SortingDiv">
                    <b><label htmlFor="sortBy">Select Category</label></b>
                    <select name="sortBy" id="sortBy" onChange={handleSortChange}>
                        <option value="">Select</option>
                        <option value="firstName">firstName</option>
                        <option value="age">age</option>
                    </select>
                </div>

                <div className="SortingDiv">
                    <b><label htmlFor="order">Select Order</label></b>
                    <select name="order" id="order" onChange={handleOrderChange}>
                        <option value="">Select</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                <div>
                    <input type="text" value={inputValue} placeholder="Search By FirstName..." onChange={(e) => setInputValue(e.target.value)} />
                </div>
            </nav>

            <br /><br />


            <div className="AddUserDiv">
                <h1>Add User Form</h1>
                <form>
                    {fields.map((element, index) => {
                        return (
                            <div key={index}>
                                <label htmlFor={element.name}>
                                    {element.label} :
                                </label>

                                {element.type === "select" ? (
                                    <select
                                        name={element.name}
                                        value={values[element.name]}
                                        onChange={handleChange}
                                        onBlur={handleValidation}
                                    >
                                        {element.options.map((opt, i) => (
                                            <option key={i} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={element.type}
                                        placeholder={element.placeholder}
                                        name={element.name}
                                        value={values[element.name]}
                                        onChange={handleChange}
                                        onBlur={handleValidation}
                                    />
                                )}

                                <p style={{ color: "red" }}>
                                    {errors[element.name]}
                                </p>

                                <br />
                                <br />
                            </div>
                        );
                    })}

                    <button type="button" onClick={() => handleAddUser(values)}>
                        Add User
                    </button>
                </form>
            </div>

            <br /><br />

            {/* Data showing Page */}
            <h1>User Data</h1>
            <div className="Container">
                <RenderData UserData={UserData} onDelete={handleDelete} />
            </div>

            <br /><br />
            <div className="PaginationDiv">
                <button onClick={() => handlePrevPage()}>Prev</button>
                <p> {currentPage} / {totalPage} </p>
                <button onClick={() => handleNextPage()}>Next</button>
            </div>
        </>
    )
}