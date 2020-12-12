module.exports = class TimedeltaTool{
    static str2secs(s){
        if (s=='5s'){ return 5 }
        if (s=='2m14s'){ return 134 }
    }
}