const qualifications = [

    {
        title: "Bachelor's Degree",
        year: 2025,
        description: "Pursuing a B.Tech in CSE with a specialization in AI & ML from Vellore Institute of Technology (VIT).",
        institute: {
            name: "Vellore Institute of Technology",
            shortName: "VIT-AP",
            duration: "Dec 2021 - May 2025"
        }
    },
    {
        title: "Mern Full Stack Web Development(Internship)",
        year: 2023,
        description: "A Hospital Management System built using React, Node.js, Express.js, and MongoDB to efficiently manage patient records, appointments, and staff. It features a responsive UI, secure authentication, and role-based access control.",
        institute: {
            name: "Ethnus",
            duration: "Sept 2023 - December 2023"
        }
    },
    {
        title: "Higher Secondary School Certificate",
        year: 2021,
        description: "Achieved two years higher secondary degree from Science major from a reputed college.",
        institute: {
            name: "Sri Chaithanya Junior College",
            shortName: "SCJ",
            duration: "June 2019 - May 2021"
        }
    },
    {
        title: "Secondary School Certificate (SSC)",
        year: 2019,
        description: "Completed 10th grade from a reputed high school with a strong academic foundation.",
        institute: {
            name: "Sri Lakshmi High School, Kurnool",
            shortName: "SLHS",
            duration: "June 2018 - April 2019"
        }
    }
    
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}
                
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");

