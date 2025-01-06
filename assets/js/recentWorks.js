const recentWorks = [
    {
        title: "Job Portal - Vitamin Job",
        description: "A platform with 50+ active users where we post jobs, roadmaps, and free courses.",
        techs: ["ReactJS", "Tailwind", "Node.js", "MongoDB"],
        img: "/images/job-portal.png",
        link: "https://www.vitaminjob.com"
    },
    {
        title: "Hospital Management System",
        description: "A Website that allows patients to schedule appointments with healthcare professionals easily.",
        techs: ["React", "Node", "JS", "MongoDB", "Tailwind"],
        img: "/images/hospital.png",
        link: "https://hms-pied.vercel.app/#appointment"
    },
    {
        title: "Sentiment Analysis - Twitter Prediction",
        description: "A model to predict whether a statement on Twitter is negative or positive.",
        techs: ["Python", "CNN", "NLTK", "Scikit-learn"],
        img: "/images/sentiment.png",
        link: "https://github.com/santhosh-2504"
    }
];

const parent = document.getElementById('recent-works');

const getTech = (techs) => {
    return techs.map(tech =>
        `<button type="button" class="text-gray-900 bg-gray-100 border border-gray-100 hover:bg-gray-50 font-medium rounded-md text-sm px-3.5 py-2 mr-2 mb-2 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-600">
                ${tech}
            </button>`).join(" ");
}

const html = recentWorks.map(work =>
    `<div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="lg:h-36 object-cover">
            <img class="rounded-t-lg w-full" src=${work.img} alt=${work.title} />
        </div>
        <div class="p-3 border-t border-gray-100 dark:border-gray-600">
            <h5 class="text-xl font-semibold text-gray-900 dark:text-gray-200">${work.title}</h5>
        <p class="font-light text-gray-800 dark:text-gray-400">${work.description}</p>
        <div class="my-4 flex flex-wrap">
            ${getTech(work.techs)}
        </div>
        <a href="${work.link}" target="_blank"
            class="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-blue-500 hover:bg-blue-600 dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
        </a>
        </div>
    </div>`
);

parent.innerHTML = html.join(" ");
