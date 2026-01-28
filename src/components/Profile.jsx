
const Profile = ({name,age,skills,language}) => {
  return (
    <div>
        <h2>This is Profile Page</h2>
        <p>He is Mr.{name}🔥 and he was {age} years old. He was strong in <b>{language.join(",")}</b></p>
        <h4>Skills are:</h4>
        <ul>
            {skills.map((skill)=> {
                return <li>{skill}</li>
})}
        </ul>
    </div>
  )
}

export default Profile
