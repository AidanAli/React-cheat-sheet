function Students({isStudent}){
    return(
        <>
            <div>Name: {isStudent.name}</div>
            <p>Student: {
            isStudent ? <span>YES it is true</span>: <span>NO it is not True</span>}</p>
        </>
    )

}
export default Students