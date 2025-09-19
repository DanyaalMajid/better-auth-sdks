# OrganizationUpdatePostRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the organization | [optional] 
**slug** | **str** | The slug of the organization | [optional] 
**logo** | **str** | The logo of the organization | [optional] 
**metadata** | **str** | The metadata of the organization | [optional] 

## Example

```python
from better_auth.models.organization_update_post_request_data import OrganizationUpdatePostRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationUpdatePostRequestData from a JSON string
organization_update_post_request_data_instance = OrganizationUpdatePostRequestData.from_json(json)
# print the JSON string representation of the object
print(OrganizationUpdatePostRequestData.to_json())

# convert the object into a dict
organization_update_post_request_data_dict = organization_update_post_request_data_instance.to_dict()
# create an instance of OrganizationUpdatePostRequestData from a dict
organization_update_post_request_data_from_dict = OrganizationUpdatePostRequestData.from_dict(organization_update_post_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


