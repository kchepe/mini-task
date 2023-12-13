import { IonAlert } from "@ionic/react";
import "./ExploreContainer.css";
import { useState } from "react";
import useGetPersons from "../hooks/useGetPersons";
import Person from "./Person";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState("");
  const {
    responseData: { isLoading, data: persons, error },
    removePerson,
  } = useGetPersons();

  const handleShowAlert = (id: string) => {
    setShowAlert(true);
    setSelectedPerson(id);
  };

  if (isLoading) {
    return <div id="container">Loading...</div>;
  }

  if (!persons.length) {
    return <div id="container">Empty List.</div>;
  }

  if (error) {
    return (
      <div id="container">Something went wrong!. Please try again later.</div>
    );
  }

  return (
    <div id="container">
      <IonAlert
        isOpen={showAlert}
        message="Are you sure you want to remove this user?"
        buttons={[
          {
            text: "Remove",
            role: "confirm",
            handler: () => removePerson(selectedPerson),
          },
        ]}
        onDidDismiss={() => setShowAlert(false)}
      />
      {persons.map((person: any, index) => (
        <Person
          key={`${person.login.uuid} ${index}`}
          person={person}
          handleShowAlert={handleShowAlert}
        />
      ))}
    </div>
  );
};

export default ExploreContainer;
