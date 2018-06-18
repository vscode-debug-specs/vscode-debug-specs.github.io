module BubbleSort

	# bubble sort
	def sort(list)
		for i in 0..list.length-2
			for j in 0..list.length-2-i
				if list[j] > list[j+1]
					tmp = list[j]
					list[j] = list[j+1]
					list[j+1] = tmp
				end
			end
		end
	end

  module_function :sort
end
