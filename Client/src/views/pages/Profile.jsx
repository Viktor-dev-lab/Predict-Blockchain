import DefaultLayout from "../layouts/DefaultLayout";
import ProfileComp from "../components/ProfileComp";
import { useState, useEffect } from "react";


const CreatePage = () => {
  const [backendData, setBackendData] = useState();

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => setBackendData(data))
  }, [])

  console.log(backendData)
  
  return (
    <DefaultLayout>
      <ProfileComp />
    </DefaultLayout>
  );
};

export default CreatePage;
