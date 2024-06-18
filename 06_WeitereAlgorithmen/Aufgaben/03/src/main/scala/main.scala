import scala.util.Random

object main {
  def main(args: Array[String]): Unit = {
    val counting: LazyList[Int] = LazyList.from(1)

    val twos: LazyList[Int] = LazyList.iterate(2)(_ + 2)

    val powersOfTwo: LazyList[Int] = LazyList.iterate(2)(_ * 2)

    val alphabet: LazyList[String] = LazyList.iterate("a") { str =>
      def increment(s: String): String = {
        val lastChar = s.last
        if (lastChar == 'z') {
          increment(s.dropRight(1)) + 'a'
        } else {
          s.dropRight(1) + (lastChar + 1).toChar
        }
      }

      increment(str)
    }

    def randomNumbers: LazyList[Int] = LazyList.continually(Random.nextInt(6) + 1)

    println(counting.take(10).toList)
    println(twos.take(10).toList)
    println(powersOfTwo.take(10).toList)
    println(alphabet.take(10).toList)
    println(randomNumbers.take(10).toList)

  }
}