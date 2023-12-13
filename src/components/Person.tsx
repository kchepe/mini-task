import {
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";
import React from "react";

interface PersonProps {
  person: any;
  handleShowAlert: (id: string) => void;
}

const Person = ({ person, handleShowAlert }: PersonProps) => {
  return (
    <IonItemSliding>
      <IonItem className="myList">
        <div className="person-container">
          <img src={person.picture.large} alt={person.name.first} />
          <div>
            <IonLabel>
              <h4>
                {person.name.first} {person.name.last}
              </h4>
              <span className="email">{person.email}</span>
            </IonLabel>
          </div>
        </div>
      </IonItem>
      <IonItemOptions>
        <IonItemOption
          color="danger"
          onClick={() => handleShowAlert(person.login.uuid)}
        >
          Delete
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default Person;
