# OrganizationDeletePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization_id** | **str** | The organization id to delete | 

## Example

```python
from better_auth.models.organization_delete_post_request import OrganizationDeletePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationDeletePostRequest from a JSON string
organization_delete_post_request_instance = OrganizationDeletePostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationDeletePostRequest.to_json())

# convert the object into a dict
organization_delete_post_request_dict = organization_delete_post_request_instance.to_dict()
# create an instance of OrganizationDeletePostRequest from a dict
organization_delete_post_request_from_dict = OrganizationDeletePostRequest.from_dict(organization_delete_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


