import React from "react";
import "./PersonList.css";
import { Link } from "react-router-dom";

const PersonList = ({ personList, onEdit, onRemove }) => {
  return (
    <div className="list">
      {personList.map((person) => (
        <div className="card" key={person.id}>
          <p> Votre Prenom est : {person.nom}</p>
          <p> Votre Nom age : {person.prenom}</p>
          <p> votre Age est : {person.age}</p>
          <p> votre Age est : {person.ville}</p>
          <button onClick={() => onEdit(person)}>Modifier</button>
          <button onClick={() => onRemove(person.id)}>Supprimer</button>
          <Link to={`/details`} state={person}> Afficher Details </Link>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
