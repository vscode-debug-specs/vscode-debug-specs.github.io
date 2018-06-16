SRC_DIR=typescript
OUT_DIR=typescriptout
NODE_BIN=./node_modules/.bin

build: $(OUT_DIR)/bubble_sort.js
$(OUT_DIR)/bubble_sort.js: $(SRC_DIR)/bubble_sort.ts
	$(NODE_BIN)/tsc
$(OUT_DIR)/bubble_sorter.js: $(SRC_DIR)/bubble_sorter.ts
	$(NODE_BIN)/tsc

clean:
	rm -rf $(OUT_DIR)