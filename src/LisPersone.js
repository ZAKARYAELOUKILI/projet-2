import { useReducer, useRef, useState } from "react";
import "./StylList.css";
import PersonList from "./PersonList";

const LisPersone = () => {
  const Nom = useRef();
  const Prenom = useRef();
  const Age = useRef();
  const Ville = useRef();
  const [editId, setEditId] = useState(null);

  const [personList, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "add_task": {
        return [
          ...state,
          {
            id: Date.now(),
            nom: action.nom,
            prenom: action.prenom,
            age: action.age,
            ville: action.ville,
          },
        ];
      }
      case "remove_task": {
        return state.filter((person) => person.id !== action.id);
      }
      case "edit_task": {
        return state.map((person) =>
          person.id === action.id
            ? {
                ...person,
                nom: action.nom,
                prenom: action.prenom,
                age: action.age,
                ville: action.ville,
              }
            : person
        );
      }
      default: {
        return state;
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nom = Nom.current.value.trim();
    const prenom = Prenom.current.value.trim();
    const age = Age.current.value.trim();
    const ville = Ville.current.value.trim();

    if (nom && prenom && age && ville) {
      if (editId) {
        dispatch({ type: "edit_task", id: editId, nom, prenom, age, ville });
        setEditId(null);
      } else {
        dispatch({ type: "add_task", nom, prenom, age, ville });
      }
      Nom.current.value = "";
      Prenom.current.value = "";
      Age.current.value = "";
      Ville.current.value = "";
    }
  };

  const handleEdit = (person) => {
    Nom.current.value = person.nom;
    Prenom.current.value = person.prenom;
    Age.current.value = person.age;
    Ville.current.value = person.ville;
    setEditId(person.id);
  };

  return (
    <div className="container">
      <h1> Liste des Personnes</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Nom :</label>
        <input type="text" name="nom" ref={Nom} />
        <label>Prenom:</label>
        <input type="text" name="prenom" ref={Prenom} />
        <label>Age:</label>
        <input type="text" name="age" ref={Age} />
        <label>Ville:</label>
        <input type="text" name="Ville" ref={Ville} />
        <button type="submit">{editId ? "Modifier" : "Ajouter"}</button>
      </form>
      <h2>Nom de personne : {personList.length}</h2>
      <PersonList
        personList={personList}
        onEdit={handleEdit}
        onRemove={(id) => dispatch({ type: "remove_task", id })}
      />
    </div>
  );
};

export default LisPersone;
