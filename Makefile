. := $(dir $(MAKEFILE_LIST))

ifeq ($(OS), Windows_NT)
	PATH := $./node_modules/.bin;$(PATH)
else
	PATH := $./node_modules/.bin:$(PATH)
endif

test:
	ava
