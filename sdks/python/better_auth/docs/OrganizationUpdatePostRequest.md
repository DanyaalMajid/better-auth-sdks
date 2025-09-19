# OrganizationUpdatePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OrganizationUpdatePostRequestData**](OrganizationUpdatePostRequestData.md) |  | 
**organization_id** | **str** | The organization ID. Eg: \&quot;org-id\&quot; | [optional] 

## Example

```python
from better_auth.models.organization_update_post_request import OrganizationUpdatePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationUpdatePostRequest from a JSON string
organization_update_post_request_instance = OrganizationUpdatePostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationUpdatePostRequest.to_json())

# convert the object into a dict
organization_update_post_request_dict = organization_update_post_request_instance.to_dict()
# create an instance of OrganizationUpdatePostRequest from a dict
organization_update_post_request_from_dict = OrganizationUpdatePostRequest.from_dict(organization_update_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


