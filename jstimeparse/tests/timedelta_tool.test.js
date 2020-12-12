import TimedeltaTool from '../../jstimeparse/timedelta_tool'

test('TimedeltaTool.str2secs', () => {
    expect(TimedeltaTool.str2secs('5s')).toStrictEqual(5)
})