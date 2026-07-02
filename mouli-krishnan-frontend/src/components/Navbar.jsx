import React, {
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { NavLink } from "react-router-dom";

import { LanguageContext } from "../context/LanguageContext";

import IntroOverlay from "./IntroOverlay";

import logo from "../assets/logo.png";

import englishSong from "../assets/songs/believer.mp3";
import tamilSong from "../assets/songs/karuppa.mp3";

import { FaHome } from "react-icons/fa";
import { BsPersonFillExclamation } from "react-icons/bs";
import { GiLightBulb } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";

import "./Nav.css";

const Navbar = ({ showIntro, setShowIntro }) => {

    const { text, language, setLanguage } =
        useContext(LanguageContext);

    const [playing, setPlaying] = useState(false);
    // const [showIntro, setShowIntro] = useState(true);

    const audioRef = useRef(null);

    // ===========================
    // Audio
    // ===========================

    useEffect(() => {

        const song =
            language === "ta"
                ? tamilSong
                : englishSong;

        if (audioRef.current) {
            audioRef.current.pause();
        }

        audioRef.current = new Audio(song);

        audioRef.current.onended = () =>
            setPlaying(false);

    }, [language]);

    // ===========================
    // Toggle Music
    // ===========================

    const toggleMusic = () => {

        setShowIntro(false);

        if (audioRef.current.paused) {

            audioRef.current.play();
            setPlaying(true);

        } else {

            audioRef.current.pause();
            setPlaying(false);

        }

    };

    // ===========================
    // Navigation Items
    // ===========================

    const navItems = useMemo(() => ([
        {
            path: "/",
            icon: <FaHome />,
            label: text.home,
        },
        {
            path: "/about",
            icon: <BsPersonFillExclamation />,
            label: text.about,
        },
        {
            path: "/skills",
            icon: <GiLightBulb />,
            label: text.skills,
        },
        {
            path: "/experience",
            icon: <MdWork />,
            label: text.experience,
        },
        {
            path: "/services",
            icon: <IoSettings />,
            label: text.services,
        },
        {
            path: "/contact",
            icon: <BiSolidPhoneCall />,
            label: text.contact,
        },
    ]), [text]);

    return (
        <>
            {/* Intro Overlay */}

            <IntroOverlay
                show={showIntro}
                onClose={() => setShowIntro(false)}
            />

            {/* Music Logo */}

            <div
                className={`music-logo ${playing ? "rotate-logo" : ""}`}
                onClick={toggleMusic}
            >
                <img
                    src={logo}
                    alt="Portfolio Logo"
                    className="logo"
                />
            </div>

            {/* Hide everything until intro closes */}

            {!showIntro && (
                <>
                    {/* Navbar */}

                    <nav className="floating-nav">

                        {navItems.map(({ path, icon, label }) => (

                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <div className="nav-icon">
                                    {icon}
                                </div>

                                <span className="nav-text">
                                    {label}
                                </span>

                            </NavLink>

                        ))}

                    </nav>

                    {/* Language */}

                    <div className="language-box">

                        <select
                            value={language}
                            onChange={(e) =>
                                setLanguage(e.target.value)
                            }
                        >
                            <option value="en">
                                English
                            </option>

                            <option value="ta">
                                தமிழ்
                            </option>

                        </select>

                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;