require 'test/unit'
require_relative '../bubble_sort'

class BubbleSortTest < Test::Unit::TestCase

  def test_bubble_sort
	list = [4,3,2,1]
	BubbleSort.sort(list)
	assert_equal([1,2,3,4], list)
  end

end
