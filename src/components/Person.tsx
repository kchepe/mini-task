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
      <IonItem>
        <IonLabel>
          <h4>
            {person.name.first} {person.name.last}
          </h4>
          <span className="email">{person.email}</span>
        </IonLabel>
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
