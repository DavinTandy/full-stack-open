const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
  
const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}
  
const Course = ({course}) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return (
    <div>
      <Header course={course.name} />
      {course.parts.map(part => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
      <p><strong>total of {total} exercises</strong></p>
    </div>
  )
}

export default Course