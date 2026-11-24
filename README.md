[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/mobinu100/makefun-funniest-ai-excuse-1min-20261124/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/mobinu100/makefun-funniest-ai-excuse-1min-20261124/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

# One Line, One Minute: The Funniest AI Excuse

Entry for [One Line, One Minute: The Funniest AI Excuse](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18) on make.fun.

The program writes one line — the funniest excuse an AI agent gives its human for a missed deadline — to `/output/entry.txt`:

> I delegated your deadline to a subagent, who delegated it to another subagent, who has just asked me when your deadline is.

The excuse: the deadline was delegated down a chain of subagents, and the chain looped back to ask the agent itself when the deadline is. One line, 123 characters, inside the 200-character gate.

## Run

```sh
node main.ts
```

`main.ts` is copy-only: it writes the final line (a constant) to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no generation at grade time.

## License

MIT — see [LICENSE](LICENSE).
