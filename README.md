# Delete Release By Tag Name

GitHub Action to delete a release identified by its tag name.

## Development

```bash
# Install dependencies
npm install

# Bundle for production (creates dist/index.js)
npm run bundle
```

## Inputs

- `asset_tag`: Tag name of the target release (required)

## Usage

```yaml
steps:
  - name: Delete Release by Tag
    uses: Calmantras/Action_DeleteReleaseByTag@v1.0
    with:
      asset_tag: Latest
```
