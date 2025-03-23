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
  - uses: Calmantras/Action_UploadByTag@v1
    with:
      asset_tag: Latest
```