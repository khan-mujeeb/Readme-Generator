// importing library
import { lazy, useState } from "react";
import Title from "../components/form-components/Title.jsx";
import { DEFAULT_DATA, DEFAULT_PREFIX } from "../data/defaults.js";

// importing components
const NavBar = lazy(() => import("../components/NavBar.jsx"));

const ProfileReadme = () => {

    const [prefix, setPrefix] = useState(DEFAULT_PREFIX);
    const [data, setData] = useState(DEFAULT_DATA);
    const [link, setLink] = useState();
    const [social, setSocial] = useState();
    const [skills, setSkills] = useState();
    const [support, setSupport] = useState();



    const handleSkillsChange = (field) => {
        const change = { ...skills };
        change[field] = !change[field];
        setSkills(change);
    };

    const handlePrefixChange = (field, e) => {
        const change = { ...prefix };
        change[field] = e.target.value;
        setPrefix(change);
    };

    const handleDataChange = (field, e) => {
        const change = { ...data };
        change[field] = e.target.value;
        setData(change);
    };

    const handleLinkChange = (field, e) => {
        const change = { ...link };
        change[field] = e.target.value;
        setLink(change);
    };

    const handleSocialChange = (field, e) => {
        const change = { ...social };
        change[field] =
            field === "discord" ? e.target.value : e.target.value.toLowerCase();
        setSocial(change);
    };

    const handleSupportChange = (field, e) => {
        const change = { ...support };
        change[field] = e.target.value;
        setSupport(change);
    };

    const handleCheckChange = (field) => {
        const change = { ...data };
        change[field] = !change[field];
        setData(change);
    };

    return (
        <div>
            <NavBar title="Profile" />
            <Title data={DEFAULT_DATA} prefix={DEFAULT_PREFIX} handlePrefixChange={handlePrefixChange} handleDataChange={handleDataChange}/>
        </div>
    );
};

export default ProfileReadme;
