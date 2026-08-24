# আসল outage-এ CAP theorem tradeoff

*শিক্ষামূলক সংক্ষিপ্ত বিবরণ — distributed systems মৌলিক ধারণা.*

## এক অনুচ্ছেদে theorem

CAP theorem বলে **network partition**-এর সময় distributed system একসাথে **Consistency** (প্রতিটি read সর্বশেষ write দেখায়) ও **Availability** (প্রতিটি request non-error response পায়) guarantee করতে পারে না। বাস্তবে partition tolerance real network-এ optional নয় — consistency ও availability কীভাবে degrade হবে সেটাই বেছে নেন।

## দল আসলে কী সিদ্ধান্ত নেয়

- **CP leaning** — Partition-এ strong consistency; কিছু request fail বা block (যেমন quorum-based write)।
- **AP leaning** — Available থাকা; stale read বা পরে conflict resolution (যেমন eventually consistent replica)।

## আসল outage pattern

1. **Split brain** — দুই partition primary মনে করে; write diverge হয়।
2. **Stale read** — Failover-এর পর user পুরোনো data দেখে কারণ replication lag underestimate করা হয়েছিল।
3. **Retry storm** — Client degraded node-এ hammer করে availability আরও খারাপ করে।

## আংশিক গভীরতা নোট

এই নিবন্ধ trade space সারসংক্ষেপ করে। Database ও consensus system-এর operational playbook vendor ও topology অনুযায়ী ভিন্ন।

*PACELC, fencing token ও quorum design — ভবিষ্যৎ revision-এ আসছে.*
