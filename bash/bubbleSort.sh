#!/bin/bash

function bubble_sort() {
	list=()
	for x in ${@}
	do
		list+=(${x})
	done

	i=0
	while [ ${i} -lt ${#list[*]} ]
	do
		jMax=`expr ${#list[*]} - ${i} - 1`
		j=0
		while [ ${j} -lt ${jMax} ]
		do
			jp=`expr $j + 1`
			left=${list[${j}]}
			right=${list[${jp}]}
			if [ $left -ge $right ] ; then
				list[$j]=$right
				list[$jp]=$left
			fi
			j=`expr $j + 1`
		done
		i=`expr $i + 1`
	done
	echo ${list[@]}
}

bubble_sort ${@}