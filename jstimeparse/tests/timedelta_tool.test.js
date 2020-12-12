// import TimedeltaTool from '../../jstimeparse/timedelta_tool'
const TimedeltaTool = require('../../jstimeparse/timedelta_tool.js');

test('TimedeltaTool.str2secs', () => {
    expect(TimedeltaTool.str2secs('5s')).toStrictEqual(5)
})