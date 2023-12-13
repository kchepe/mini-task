import { useIonToast } from "@ionic/react";
import { useEffect, useState } from "react";

const api = "https://randomuser.me/api/?results=100";

const useGetPersons = () => {
  const [present] = useIonToast();
  const [responseData, setResponseData] = useState({
    isLoading: true,
    error: false,
    data: [],
  });

  const presentToast = (message: string) => {
    present({
      message,
      duration: 1500,
      position: "bottom",
    });
  };

  useEffect(() => {
    const getPersons = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setResponseData((prevState) => {
          const newState = { ...prevState };
          newState.data = data.results;
          newState.isLoading = false;
          return newState;
        });
      } catch {
        setResponseData((prevState) => {
          const newState = { ...prevState };
          newState.isLoading = false;
          newState.error = true;
          return newState;
        });
      }
    };
    getPersons();
  }, []);

  const removePerson = (uuid: string) => {
    setResponseData((prevState) => {
      const newState = { ...prevState };
      newState.data = prevState.data.filter(
        (value: any) => value.login.uuid !== uuid
      );
      presentToast("User successfully deleted!");
      return newState;
    });
  };

  return { responseData, removePerson };
};

export default useGetPersons;
