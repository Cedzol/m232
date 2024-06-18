class main {
  case class Course(title: String, students: List[String])

  val courses = List(
    Course("M323", List("Peter", "Petra", "Paul", "Paula")),
    Course("M183", List("Paula", "Franz", "Franziska")),
    Course("M117", List("Paul", "Paula")),
    Course("M114", List("Petra", "Paul", "Paula")),
  )

  // Module, die von Peter besucht werden
  val petersCourses = courses.filter(_.students.contains("Peter")).map(_.title)
  println(s"Peter besucht folgende Module: ${petersCourses.mkString(", ")}")

  // Module, die von Petra besucht werden
  val petrasCourses = courses.filter(_.students.contains("Petra")).map(_.title)
  println(s"Petra besucht folgende Module: ${petrasCourses.mkString(", ")}")

  case class CourseSubscriptions(title: String, totalStudents: Int)

  val courseSubscriptions = courses.map(course => CourseSubscriptions(course.title, course.students.size))
  courseSubscriptions.foreach(println)


  CourseSubscriptions(M323,4)
  CourseSubscriptions(M183,3)
  CourseSubscriptions(M117,2)
  CourseSubscriptions(M114,3)
}
