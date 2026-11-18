import sys, json
mode, level, out = sys.argv[1:4]
idf, edf = f"{out}/cc_{level}_target_ids.json", f"{out}/cc_{level}_inlink_ids.txt"
def want(rev):  # reversed names: ae.agec, ae.agec.www, ae.agec.<sub>
    return rev == "ae.agec" or rev.startswith("ae.agec.")
if mode == "ids":
    ids = {}
    for line in sys.stdin:
        p = line.rstrip("\n").split("\t")
        if len(p) >= 2 and want(p[1]): ids[p[0]] = p[1]
    json.dump(ids, open(idf, "w"), indent=1); print(level, "target ids", ids)
elif mode == "edges":
    ids = set(json.load(open(idf))); n = 0
    with open(edf, "w") as o:
        for line in sys.stdin:
            a, b = line.split("\t")[:2]
            if b.strip() in ids: o.write(f"{a}\t{b.strip()}\n"); n += 1
    print(level, "inbound edges", n)
elif mode == "names":
    need = {l.split("\t")[0] for l in open(edf)}; res = {}
    for line in sys.stdin:
        p = line.rstrip("\n").split("\t")
        if p[0] in need: res[p[0]] = p[1]
    json.dump(res, open(f"{out}/cc_{level}_names.json", "w")); print(level, "names", len(res))
