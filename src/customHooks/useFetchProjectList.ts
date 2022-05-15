import { collection, CollectionReference, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../firebase";
import { Project } from "../types";

/**
 * Fetch a list of projects registered in the DB
 * @returns list of projects
 */
export const useFetchProjectList = () => {
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch snapshot of all project data in DB
      const querySnapshot = await getDocs(
        collection(db, "projects") as CollectionReference<Project>
      );

      // Define temporary variables to store project data
      const _projectList: Project[] = [];

      // Retrieve project data from snapshot
      querySnapshot.forEach((doc) => _projectList.push(doc.data()));

      // Stores project data
      setProjectList(_projectList);
    }
    fetchData();
  }, []);

  return projectList;
};
