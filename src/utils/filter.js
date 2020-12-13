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
        return this.attribute + " " + this.comparator + " " + this.threshold.toString();
    }

    filter(data) {
        switch (this.comparator) {
            case "=":
            case "==":
                if (this.attribute == "TimeStamp")
                    return data.filter(d => sameDay(d[this.attribute], this.threshold))
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

function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

export default Filter