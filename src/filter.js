import Vue from "Vue"

Vue.filter(
    "shorten",function(value,textLength) {
        return value.substring(0,textLength)+" ..."
    }
)