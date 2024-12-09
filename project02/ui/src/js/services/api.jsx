const rootURL = "http://localhost:8000";

// React Task 1:
export async function fetchUser(username) {
    // replace this code with functionality that actually
    // queries that correct endpoint:
    let baseURL = `${rootURL}/api/users/`;
    baseURL += username;
    console.log(baseURL);
    const response = await fetch(baseURL);
    const user = await response.json();
    console.log(user);
    return user;
}

export async function fetchDepartmentList() {
    let baseURL = `${rootURL}/api/departments/`;
    console.log(baseURL);
    const response = await fetch(baseURL);
    const departmentList = await response.json();
    console.log(departmentList);
    return departmentList; 
}

// React Task 3:
export async function fetchCourses(options = {}) {
    let baseURL = `${rootURL}/api/courses?`;
    if (options.department) {
        baseURL += `department=${options.department}&`;
    }
    if (options.instructor) {
        baseURL += `instructor=${options.instructor}&`;
    }
    if (options.hours) {
        baseURL += `hours=${options.hours}&`;
    }
    if (options.title) {
        baseURL += `title=${options.title}&`;
    }
    if (options.classifications){
        options.classifications.forEach(element => {
            if (element == "di") {
                baseURL += `diversity_intensive=True&`;
            }
            if (element == "dir") {
                baseURL += `diversity_intensive_r=True&`;
            }
            if (element == "fys") {
                baseURL += `first_year_seminar=True&`;
            }
            if (element == "honors") {
                baseURL += `honors=True&`;
            }
            if (element == "arts") {
                baseURL += `arts=True&`;
            }
            if (element == "service_learning") {
                baseURL += `service_learning=True&`;
            }
        });
    }
    if (options.open) {
        baseURL += `open=${options.open}&`;
    }
    if (options.days) {
        baseURL += `days=`;
        //options.days can be out of proper order, but the query cannot
        if (options.days.includes("M")) baseURL += `M`;
        if (options.days.includes("T")) baseURL += `T`; 
        if (options.days.includes("W")) baseURL += `W`; 
        if (options.days.includes("R")) baseURL += `R`;  
        if (options.days.includes("F")) baseURL += `F`; 
        baseURL +=`&`;
    }
    console.log(baseURL);
    const response = await fetch(baseURL);
    const courses = await response.json();
    console.log(courses);
    return courses;
}

export async function fetchSchedule(username) {
    const response = await fetch(`${rootURL}/api/schedules/${username}`);
    return await response.json();
}

export async function deleteCourseFromSchedule(schedule, crn) {
    const url = `${rootURL}/api/schedules/${schedule.id}/courses/${crn}`;
    const response = await fetch(url, {
        method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export async function addCourseToSchedule(schedule, crn) {
    console.log(crn);
    const url = `${rootURL}/api/schedules/${schedule.id}/courses`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            crn: crn,
        }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}
