# OrganizationCheckSlugPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **str** | The organization slug to check. Eg: \&quot;my-org\&quot; | 

## Example

```python
from better_auth.models.organization_check_slug_post_request import OrganizationCheckSlugPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationCheckSlugPostRequest from a JSON string
organization_check_slug_post_request_instance = OrganizationCheckSlugPostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationCheckSlugPostRequest.to_json())

# convert the object into a dict
organization_check_slug_post_request_dict = organization_check_slug_post_request_instance.to_dict()
# create an instance of OrganizationCheckSlugPostRequest from a dict
organization_check_slug_post_request_from_dict = OrganizationCheckSlugPostRequest.from_dict(organization_check_slug_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


