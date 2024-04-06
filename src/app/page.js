'use client'
import Link from "next/link";
import { RoundedBtn, SimpleBtn } from "@/components/Btn/Btn"
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import { CustomFlowbiteTheme } from "flowbite-react";

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
        <main className="pt-20 px-4">
            {/* <h1>Dashboard</h1> */}
            <DelCarousel />
            <FeatureSection />
            <About />
        </main>
    );
}




function DelCarousel() {
    return (
        <div className="relative h-60 sm:h-80 xl:h-100 z-30   ">
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
            class="overflow-hidden px-2 pt-16 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white rounded-lg"
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


        <div class=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:py-20">
            <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 pt-3">

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
        </div>
    );
}





