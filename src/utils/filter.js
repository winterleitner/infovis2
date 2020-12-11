import moment from 'moment'

class Filter {
    constructor(attribute, comparator, threshold) {
        this.attribute = attribute
        this.comparator = comparator
        this.threshold = threshold
        if (attribute == "TimeStamp") {
            this.threshold = moment(threshold).toDate()
        }
    }

    toString () {
        if (this.attribute == "TimeStamp") {
            return this.attribute + " " + this.comparator + " " + this.threshold.toLocaleDateString("de-DE");
        }
        return this.attribute + " " + this.comparator + " " + this.threshold.toString() + "d";
    }

    filter(data) {
        switch (this.comparator) {
            case "=":
            case "==":
                return data.filter(d => d[this.attribute] == this.threshold)
            case "<":
                return data.filter(d => d[this.attribute] < this.threshold)
            case "<=":
                return data.filter(d => d[this.attribute] <= this.threshold)
            case ">":
                return data.filter(d => d[this.attribute] > this.threshold)
            case ">=":
                return data.filter(d => d[this.attribute] >= this.threshold)
        }
    }
}

export default Filter