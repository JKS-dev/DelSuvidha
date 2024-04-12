'use client'
import Link from "next/link";
import { RoundedBtn, SimpleBtn } from "@/components/Btn/Btn"
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import { CustomFlowbiteTheme } from "flowbite-react";
import Button from '@mui/material/Button';
const customTheme = {

    "root": {
        "base": "relative h-full w-full",
        "leftControl": "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none ",
        "rightControl": "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none "
    },
    "indicators": {
        "active": {
            "off": "bg-Orange hover:bg-blue  ",
            "on": "bg-blue"
        },
        "base": "h-3 w-3 rounded-full",
        "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    "item": {
        "base": "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        "wrapper": {
            "off": "w-full flex-shrink-0 transform cursor-default snap-center",
            "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
        }
    },
    "control": {
        "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10",
        "icon": "h-5 w-5 text-Orange sm:h-6 sm:w-6"
    },
    "scrollContainer": {
        "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        "snap": "snap-x"
    }

};

export default function Home() {
    const router = useRouter();
    return (
        <main className="pt-20 ">
            {/* <h1>Dashboard</h1> */}
            <DelCarousel />
            <FeatureSection />
            <About />
            <Accordion />
            <CTA />
        </main>
    );
}




function DelCarousel() {
    return (
        <div className="relative h-60 sm:h-80 xl:h-100 z-30 mx-4  ">
            <Carousel pauseOnHover theme={customTheme}>
                <Image src="/001.png" layout="fill" alt="" />
                <Image src="/002.png" layout="fill" alt="" />
                <Image src="/003.png" layout="fill" alt="" />
                <Image src="/004.png" layout="fill" alt="" />

            </Carousel>
        </div>
    );
}

function About() {
    return (

        <section
            class=" overflow-hidden px-2 pt-16 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white rounded-lg"
        >
            <div class="container mx-auto">
                <div class="flex flex-wrap items-center justify-between -mx-4">
                    <div class="w-full px-4 lg:w-6/12">
                        <div class="flex items-center -mx-3 sm:-mx-4">
                            <div class="w-full px-3 sm:px-4 xl:w-1/2">
                                <div class="py-3 sm:py-4">
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                                        alt=""
                                        class="w-full rounded-2xl"
                                    />
                                </div>
                                <div class="py-3 sm:py-4">
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                                        alt=""
                                        class="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:px-4 xl:w-1/2">
                                <div class="relative z-10 my-4">
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                                        alt=""
                                        class="w-full rounded-2xl"
                                    />
                                    <span class="absolute -right-7 -bottom-7 z-[-1]">
                                        <svg
                                            width="134"
                                            height="106"
                                            viewBox="0 0 134 106"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="1.66667"
                                                cy="104"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="104"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="31"
                                                cy="104"
                                                r="1.66667"
                                                transform="rotate(-90 31 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="104"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3334"
                                                cy="104"
                                                r="1.66667"
                                                transform="rotate(-90 60.3334 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="104"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="104"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="104"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="103"
                                                cy="104"
                                                r="1.66667"
                                                transform="rotate(-90 103 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="132"
                                                cy="104"
                                                r="1.66667"
                                                transform="rotate(-90 132 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="31"
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 31 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="103"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 103 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="132"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 132 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="74.6673"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 74.6673)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="31"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 31 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="31"
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 31 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="103"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 103 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="103"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 103 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="132"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 132 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="132"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 132 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="31"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 31 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="31"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 31 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="103"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 103 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="103"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 103 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="132"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 132 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="132"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 132 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="31"
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 31 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="31"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 31 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="103"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 103 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="103"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 103 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="132"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 132 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="132"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 132 1.66683)"
                                                fill="#3056D3"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div class="mt-10 lg:mt-0">
                            <span class="block mb-4 text-lg font-semibold text-primary text-Orange">
                                Why Choose Us
                            </span>
                            <h2
                                class="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] text-blue"
                            >
                                Revolutionizing School Management
                            </h2>

                            <p class="mb-8 text-base text-body-color dark:text-dark-6">
                                Delsuvidha is an all-in-one school management system designed for schools. It offers comprehensive features catering to administrators, teachers, and students.
                            </p>
                            <p class="mb-8 text-base text-body-color dark:text-dark-6">
                                For administrators, it includes fee, student, and teacher management, along with statistical insights and record maintenance.
                            </p>
                            <p class="mb-8 text-base text-body-color dark:text-dark-6">
                                Teachers enjoy easy student data management, doubt resolution support, and access to a variety of teaching materials, including notes and online book collections.
                            </p>
                            <p class="mb-8 text-base text-body-color dark:text-dark-6">
                                Students benefit from profile management, secure data transfer to teachers, encrypted chat for doubt resolution, and online fee payment.
                            </p><p class="mb-8 text-base text-body-color dark:text-dark-6">
                                Delsuvidha relies on Google Cloud Firestore for efficient database management. With its secure storage and real-time updates, we ensure seamless user experiences for administrators, teachers, and students. Trust in our use of cutting-edge technology for reliable and scalable solutions.
                            </p>
                            <p class="mb-8 text-base text-body-color dark:text-dark-6">
                                Moreover, Delsuvidha facilitates the digitization of school libraries through its Bookalay digital library software, creating a vast online repository of educational resources.
                            </p><Link
                                href="javascript:void(0)"
                                class="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

function FeatureSection() {
    return (


        <div class="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:py-20">
            <div class="max-w-xl mb-10 mx-2 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 pt-3">

                <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span class="relative inline-block">
                        <span class="relative text-blue">Explore Our Key Features</span>
                    </span>
                </h2>
                <p class="text-base text-gray-700 md:text-lg ">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Transforming Education with Delsuvidha: A Deep Dive Into Our Revolutionary Platform's Key Functionalities
                </p>
            </div>
            <div class="md:px-24 lg:px-8 px-4 grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div class="flex flex-col justify-between p-5 rounded-lg shadow-sm hover:shadow-xl transition-transform hover:scale-105 bg-white">
                    <div>
                        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-lightOrange">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-8 w-8" viewBox="0 0 16 16">
                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                            </svg>
                        </div>
                        <h6 class="mb-2 font-semibold leading-5">Comprehensive Administration Tools</h6>
                        <p class="mb-3 text-sm text-gray-900">
                            Simplifying school admin with fee, student, and teacher management in one efficient platform.
                        </p>
                    </div>
                    <Link href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-blue hover:Orange">Learn more</Link >
                </div>
                <div class="flex flex-col justify-between p-5 rounded-lg shadow-sm hover:shadow-xl transition-transform hover:scale-105 bg-white">
                    <div>
                        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-lightOrange">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                        </div>
                        <h6 class="mb-2 font-semibold leading-5">Secure and Efficient Communication</h6>
                        <p class="mb-3 text-sm text-gray-900">
                            Securely connect students and teachers for continuous support and guidance through encrypted chat features.
                        </p>
                    </div>
                    <Link href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-blue hover:Orange">Learn more</Link >
                </div>
                <div class="flex flex-col justify-between p-5 rounded-lg shadow-sm hover:shadow-xl transition-transform hover:scale-105 bg-white">
                    <div>
                        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-lightOrange">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8" viewBox="0 0 16 16">
                                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                            </svg>
                        </div>
                        <h6 class="mb-2 font-semibold leading-5">Convenient Online Fee Payment</h6>
                        <p class="mb-3 text-sm text-gray-900">

                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Simplify fee payments with Delsuvidha's secure online gateway, reducing administrative burdens for students and staff.
                        </p>
                    </div>
                    <Link href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-blue hover:Orange">Learn more</Link >
                </div>
                <div class="flex flex-col justify-between p-5 rounded-lg shadow-sm hover:shadow-xl transition-transform hover:scale-105 bg-white">
                    <div>
                        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-lightOrange">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8" viewBox="0 0 16 16">
                                <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2" />
                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z" />
                            </svg>
                        </div>
                        <h6 class="mb-2 font-semibold leading-5">Digital Library and Resource Repository</h6>
                        <p class="mb-3 text-sm text-gray-900">
                            Access diverse study materials and digital books with Bookalay for enhanced learning experiences.
                        </p>
                    </div>
                    <Link href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-blue hover:Orange">Learn more</Link >
                </div>
            </div>
            <div class="max-w-xl mb-10 mt-4 flex justify-center mx-auto sm:text-center lg:max-w-2xl md:mb-12 pt-3">
                <SimpleBtn text="Explore" />
            </div>
        </div>
    );
}



function CTA() {
    return (

        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20 sm:mb-20">

            <div
                class="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm">

                <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Join the Revolution
                </h2>

                <h3 class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
                    Unlock the Power of Delsuvidha,Transform Your School Management!
                </h3>

                <div class="mt-8 flex items-center justify-center gap-x-6">
                    <a class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-Orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        href="#">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>


                <svg viewBox="0 0 1024 1024"
                    class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="1">
                    </circle>
                    <defs>
                        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                            <stop stop-color="#FC6736"></stop>
                            <stop offset="1" stop-color="#FFB0B0"></stop>
                        </radialGradient>
                    </defs>
                </svg>

            </div>

        </div>
    );
}

const Accordion = () => {
    return (
        <section className="relative z-20 overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-Orange">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px] text-blue">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color">
                                Explore our comprehensive FAQ section to find answers to commonly asked questions and gain clarity on any inquiries you may have.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        
                        <AccordionItem
                            header="What is Delsuvidha?"
                            text="Delsuvidha is a comprehensive school management system designed for government schools, offering various features for students, teachers, and administration."
                        /><AccordionItem
                            header="Can schools access a wide range of online books through Delsuvidha?"
                            text="Yes, Delsuvidha offers a variety of online books for schools, benefiting both teachers and students."
                        /> 
                       <AccordionItem
                            header="How does Delsuvidha benefit school administration?"
                            text="Yes, students can easily manage their profiles, ensuring secure data transfer to teachers."
                        /> <AccordionItem
                            header="How does Delsuvidha facilitate communication between students and teachers?"
                            text="Delsuvidha features an encrypted chat system allowing students to seek doubt resolution from teachers at any time."
                        /> <AccordionItem
                            header="Is online fee payment secure on Delsuvidha?"
                            text="Yes, Delsuvidha ensures secure online fee payment for students."
                        /><AccordionItem
                            header="What features does Delsuvidha offer for teachers?"
                            text="Teachers benefit from easy student data management, doubt resolution, access to study materials, and the ability to share notes with students."
                        />  <AccordionItem
                            header="How do students stay updated on school-related information using Delsuvidha?"
                            text="Delsuvidha sends notifications, daily schedules, and exam schedules to students, keeping them informed."
                        /> 
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                    <AccordionItem
                            header="What are the main features of Delsuvidha?"
                            text="Delsuvidha offers fee management, student management, teacher management, school record maintenance, profile management for students, encrypted chat for doubt resolution, secure online fee payment, notifications, daily schedules, exam schedules, study material access, and digital library services."
                        /><AccordionItem
                            header="How does Delsuvidha support the digitalization of school libraries?"
                            text="Delsuvidha provides Bookalay, a digital library software, enabling schools to digitize their libraries and publish books online."
                            />   <AccordionItem
                            header="Is Delsuvidha user-friendly?"
                            text="Yes, Delsuvidha is designed to be user-friendly, making it easy for schools to adapt and use effectively."
                        /> <AccordionItem
                            header="Can schools customize Delsuvidha according to their specific requirements?"
                            text="Yes, Delsuvidha offers customization options to meet the unique needs of each school."
                        /> <AccordionItem
                            header="Is training provided for using Delsuvidha?"
                            text="Yes, Delsuvidha provides training sessions to help users familiarize themselves with the platform."
                        /> <AccordionItem
                            header="Can existing student data be imported into Delsuvidha?"
                            text="Yes, Delsuvidha allows for the import of existing student data to facilitate the transition to the new system."
                        /> <AccordionItem
                            header="Are there any additional costs associated with using Delsuvidha?"
                            text="Delsuvidha offers transparent pricing with no hidden costs, ensuring schools can budget effectively."
                        /> 
                    </div>
                </div>
            </div>


        </section>

    );
};



const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        event.preventDefault();
        setActive(!active);
    };
    return (
        <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={() => handleToggle()}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                    <svg
                        className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""
                            }`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
                        {header}
                    </h4>
                </div>
            </button>

            <div
                className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"
                    }`}
            >
                <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                    {text}
                </p>
            </div>
        </div>
    );
};

